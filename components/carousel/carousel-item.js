export default function CarouselItem(props) {
  console.log("CAROUSEL ITEM CHILDREN")
  console.log(props.children)
  return (
    <div className={"carousel-item " + (props.children.order === 1 ? "active" : null)}>
      {props.children}
    </div>
  );
}