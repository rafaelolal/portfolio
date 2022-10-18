export default function Project(props) {
  return (
    <div className="col-6">
      <div className="card" styles="width: 18rem;">
        <img src={`/${props.image}`} className="card-img-top" width="100%" height="100%" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.short_description}</p>
          <a href={props.link} className="btn btn-primary">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
