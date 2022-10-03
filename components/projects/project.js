export default function Project(props) {
  return (
    <div class="col-6">
      <div class="card" styles="width: 18rem;">
        <img src={`/${props.image}`} class="card-img-top" width="100%" height="100%" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.short_description}</p>
          <a href={props.link} class="btn btn-primary">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
