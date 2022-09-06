import React from 'react'

const UpdateForm = ({updateData, ChangeTask, UpdateTask, CancelUpdate}) => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <input
                        value={updateData && updateData.title}
                        onChange={(e) => ChangeTask(e)}
                        className="form-control form-control-lg" />
                </div>
                <div className="col-auto">
                    <button
                        onClick={UpdateTask}
                        className="btn btn-lg btn-success" >Update</button>{' '}
                    <button
                        onClick={CancelUpdate}
                        className="btn btn-lg btn-warning ">Cancel</button>

                </div>
            </div>
            <br /></>
    )
}

export default UpdateForm