import React from 'react'
import { Statistic } from 'semantic-ui-react';
import './InfoBlock.css';

const StatisticExampleGroup = () => (
    <div className="info_block">
        <Statistic.Group size="mini" widths="5" inverted>
            <Statistic>
                <Statistic.Value>758</Statistic.Value>
                <Statistic.Label>Пользователей</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>699</Statistic.Value>
                <Statistic.Label>Сервера</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>2,437</Statistic.Value>
                <Statistic.Label>Используется CPU</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>8,415 GB</Statistic.Value>
                <Statistic.Label>Используется RAM</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>102,882 GB</Statistic.Value>
                <Statistic.Label>Используется HDD</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    </div>
)

export default StatisticExampleGroup