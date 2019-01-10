import React from 'react';
import { Progress } from 'reactstrap';

const MyProgressBar = (props) => {
    return (
        <div>
            <div className="text-center">Used_VCPU/VCPU</div>
            <Progress multi>
                <Progress bar animated color="success" value="100">Всего: 4 Использовано: 4</Progress>
            </Progress>
            <div className="text-center">Used_RAMGB</div>
            <Progress multi>
                <Progress bar animated value="100">Всего: 8 GB Использовано: 8 GB</Progress>
            </Progress>
            <div className="text-center">Used_DISKGB</div>
            <Progress multi>
                <Progress bar animated color="danger" value="100">Всего: 128 GB Использовано: 128 GB</Progress>
            </Progress>
        </div>
    );
};

export default MyProgressBar;