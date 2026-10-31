import { Component, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { failed: boolean };

// Contains a render error to its own section so one bad section can't blank the whole page.
export default class SectionBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error(error);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
