import "./Pagination.css";

const Pagination = (props) => {
  const pageLinks = []; //number links for pagination bar ,li tags for particular page number

  function linkHandle(index) {
    props.nextPage(index);
  }

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? "active" : "";
    let invisible = i > 5 ? "invisible" : "";
    pageLinks.push(
      <li
        key={i}
        className={`${active}${invisible}`}
        onClick={() => linkHandle(i)}
      >
        <a>{i}</a>
      </li>
    );
  }

  const prevHandle = () => {
    props.nextPage(props.currentPage - 1);
  };
  const nextHandle = () => {
    props.nextPage(props.currentPage + 1);
  };

  return (
    <div style={{ backgroundColor: "#ffff" }}>
      <div className="row">
        <ul className="pagination">
          {props.currentPage > 1 ? (
            <li onClick={prevHandle}>
              <a>Prev</a>
            </li>
          ) : (
            ""
          )}
          {pageLinks}
          {props.currentPage < props.pages + 1 ? (
            <li onClick={nextHandle}>
              <a>Next</a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
