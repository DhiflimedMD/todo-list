import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';


const ToDo = ({todo, markDone, setUpdateData, DeleteTask }) => {
    return (
        <>
        { todo && todo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) => {
                return (
                    <React.Fragment key={task.id}>
                        <div className="col taskBg">
                            <div className={task.Status ? 'done' : ''}>
                                <span className="taskNumber">{index + 1}</span>
                                <span className="taskText">{task.title}</span>
                            </div>
                            <div className="iconsWrap">
                                <span
                                    title="Completed / Not Completed"
                                    onClick={(e) => markDone(task.id)}>< FontAwesomeIcon icon={faCircleCheck} /></span>
                                {task.Status ? null :
                                    (<span title="Edit"
                                        onClick={() => setUpdateData({
                                            id: task.id,
                                            title: task.title,
                                            status: task.Status ? true : false
                                        })}
                                     >< FontAwesomeIcon icon={faPen} /></span>) }
                                    <span
                                    title="Delete"
                                    onClick={() => DeleteTask(task.id)}>< FontAwesomeIcon icon={faTrashCan} /></span>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })
    }
    </>
  )
}

export default ToDo