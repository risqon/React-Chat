import React from 'react';
import ReactMarkdown from 'react-markdown'

export default function ChatItem(props) {
    return (
        <div className='d-flex mb-4'>
            <div className="img_cont_msg">
                <p className="rounded-circle user_img_msg"> {props.name.slice(0, 2).toUpperCase()}</p>
            </div>

            <div className='boks'>
                <h6 className='name'>{props.name}</h6>
                <div className="msg_cotainer">
                    <p> <ReactMarkdown
                        source={props.message}
                        escapeHtml={false}
                    /> </p>
                </div>

                <div className='row'>
                    {props.sent && <button className='btn btn danger' onClick={props.remove}><i className='cg-cl-del fas fa-trash-alt fa-xs'></i></button>}
                </div>
                <div className='row'>
                                   </div>
                {!props.sent &&
                    <div className="btn_resend">
                        <button className="btn btn-outline-success btn-sm circle"
                            onClick={() => props.resend(props.message)}>
                            <i className="fas fa-redo-alt"></i>
                        </button>
                        <p className='spinner'>network failed</p>
                    </div>}
            </div>
        </div>

        // <div className="card">
        //     <div className="card-header">
        //         <h3 className="text-primary">{props.name}</h3>
        //     </div>
        //     <div className="card-body">
        //         <h4 className="card-text">{props.message}</h4>
        //         {!props.sent && <p style={{ color: 'red', 'fontSize': '8pt' }}>network failed</p>}
        //         <button type="button" className={props.sent ? 'badge badge-pill badge-danger' : 'badge badge-pill badge-warning'} onClick={props.sent ? props.remove : props.resend}>{props.sent ? 'Delete' : 'Resend'}</button>

        //     </div >
        // </div>
    )
}