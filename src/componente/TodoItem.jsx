import React, { Fragment } from "react";

export function TodoItem() {
    return (
        <Fragment>
            <div className="d-flex justify-content-end">
                <div className="card" style={{ width: "9rem" }}>
                    <img src="https://picsum.photos/100" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Paisaje</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
