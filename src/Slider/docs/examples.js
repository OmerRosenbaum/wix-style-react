export const plainExample = `
class SliderWithState extends React.Component {

  state = { value: 3 };

  change = value => this.setState({ value })

  render() {
    const { value } = this.state;
    return (<Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />);
  }
}
`;

export const rangeSlider = `
class SliderWithState extends React.Component {

  state = { value: [2,4] };

  change = value => this.setState({ value })

  render() {
    const { value } = this.state;
    return ( <Slider onChange={this.change} min={1} max={10} displayMarks={false} value={value} />);

  }
}
`;

export const plainSliderMarks = `
class SliderWithState extends React.Component {

  state = { value: 3 };

  change = value => this.setState({ value });

  render() {
    const { value } = this.state;
    return (<Slider onChange={this.change} min={1} max={10} displayMarks={false} value={value} />);
  }
}
`;

export const rangeSliderPushable = `
class SliderWithState extends React.Component {

  state = { value: [3,4,5] };

  change = value => this.setState({ value });

  render() {
    const { value } = this.state;
    return (<Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} pushable={1} />);
  }
}
`;

export const states = `
class SliderWithState extends React.Component {

  state = { value: 2 };

  change = value => this.setState({ value });

  render() {
    const { value } = this.state;
    return (<Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} disabled /> );
  }
}
`;

export const customMarks = `
class SliderWithState extends React.Component {

  state = { value: 0 };

  change = value => this.setState({ value });

  render() {
    const { value } = this.state;
    const marks = {
            '-10': '-10°C',
            0: '0°C',
            26: '26°C',
            37: '37°C',
            50: '50°C',
            100:'100°C'
        };

    return (<Slider marks={marks} onChange={this.change} min={-10} max={100} value={value} />);
  }
}

`;
