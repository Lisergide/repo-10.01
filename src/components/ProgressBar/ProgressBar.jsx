import React from 'react';
import { Progress } from 'reactstrap';
import './ProgressBar.css';

const MyProgressBar = (props) => {
    return (
        <div> 
            <div className="text-center progress_res_title">Used_VCPU/VCPU</div>
            <Progress multi>
                <Progress bar color="success" value="100">Всего: 4 Использовано: 4</Progress>
            </Progress>
            <div className="text-center progress_res_title">Used_RAMGB</div>
            <Progress multi>
                <Progress bar value="100">Всего: 8 GB Использовано: 8 GB</Progress>
            </Progress>
            <div className="text-center progress_res_title">Used_DISKGB</div>
            <Progress multi>
                <Progress bar color="danger" value="100">Всего: 128 GB Использовано: 128 GB</Progress>
            </Progress>
        </div>
    );
};

export default MyProgressBar;