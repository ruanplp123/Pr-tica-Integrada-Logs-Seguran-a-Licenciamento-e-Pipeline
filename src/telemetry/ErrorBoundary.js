import React from 'react';
import { log } from './logger';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    log.error('React render error', {
      error: error?.message,
      stack: error?.stack,
      componentStack: info?.componentStack,
    });
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Algo deu errado. Tente recarregar.</div>;
    }
    return this.props.children;
  }
}
