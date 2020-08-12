import React from 'react';

const pathNames = ["/", "/log-in"];

const NotFound = props => {
  const checkPath = pathNames.indexOf(props.location.pathname);
  if (checkPath >= 0) {
    return null;
  }else{
    return (
      <div className="not-found">
        <h3 className="not-found-h3">404 page not found</h3>
        <p className="not-found-p">Страница не найдена.</p>
      </div>)
  }
};

export default NotFound;