export default function CarouselItem(props) {
  return (
    <div className={"carousel-item " + (props.order === 1 ? "active" : null)}>
      {props.children}
    </div>
  );
}