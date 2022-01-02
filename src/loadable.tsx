import React from "react";

export function loadable(promise: Promise<any>) {
  let resolve = () => ({
    done: false,
    result: null,
  });

  loadable.tasks++;

  promise.then((component) => {
    resolve = () => ({
      done: true,
      result: component.default,
    });
    loadable.tasks--;

    setTimeout(() => {
      if (loadable.tasks === 0) {
        window.dispatchEvent(new Event("componentsReady"));
      }
    }, 0);

    return component.default;
  });

  return class extends React.Component<
    {},
    { done: boolean; result: React.ComponentType | null }
  > {
    constructor(props) {
      super(props);
      this.state = resolve();
      promise.then((component) => {
        this.setState({
          done: true,
          result: component.default,
        });
      });
    }

    render() {
      if (this.state.done && this.state.result) {
        const Component = this.state.result;
        return <Component {...this.props} />;
      }

      return <div>Component loading</div>;
    }
  };
}

loadable.tasks = 0;
