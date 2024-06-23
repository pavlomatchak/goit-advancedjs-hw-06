/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}

class Component {
  constructor (public props: Props) {
    this.props = props;
  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};