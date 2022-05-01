import React, { useState } from 'react';

import Button from '../Button/Button';
import { IFilterParams } from '../../interfaces/message';

import './Filters.css';

interface IFiltersProps {
    filters: IFilterParams;
    onApply: (filter: IFilterParams) => unknown;
}

const Filters: React.FC<IFiltersProps> = (props) => {
    const { filters, onApply } = props;
    const { dateFrom = '', dateTo = '', author = '', text = '' } = filters;

    const [filterDateFrom, setFilterDateFrom] = useState(dateFrom);
    const [filterDateTo, setFilterDateTo] = useState(dateTo);
    const [filterAuthor, setFilterAuthor] = useState(author);
    const [filterText, setFilterText] = useState(text);

    const handleApplyFilter = () => {
        onApply({
            dateFrom: filterDateFrom,
            dateTo: filterDateTo,
            author: filterAuthor,
            text: filterText,
        });
    };

    const handleResetFilter = () => {
        setFilterDateFrom('');
        setFilterDateTo('');
        setFilterAuthor('');
        setFilterText('');

        onApply({});
    };

    return (
        <div className={'Filters'}>
            <div className={'Filters__section'}>
                <div className={'Filters__title'}>Даты публикации с</div>
                <input
                    className={'Filters__input Filters__input_date'}
                    type={'date'}
                    value={filterDateFrom}
                    onChange={(e) => {
                        setFilterDateFrom(() => e.target.value);
                    }}
                />
            </div>
            <div className={'Filters__section'}>
                <div className={'Filters__title'}>Даты публикации до</div>
                <input
                    className={'Filters__input Filters__input_date'}
                    type={'date'}
                    value={filterDateTo}
                    onChange={(e) => {
                        setFilterDateTo(() => e.target.value);
                    }}
                />
            </div>
            <div className={'Filters__section'}>
                <input
                    className={'Filters__input'}
                    type={'text'}
                    value={filterAuthor}
                    onChange={(e) => {
                        setFilterAuthor(() => e.target.value);
                    }}
                    placeholder={'Имя автора'}
                />
            </div>
            <div className={'Filters__section'}>
                <input
                    className={'Filters__input'}
                    type={'text'}
                    value={filterText}
                    onChange={(e) => {
                        setFilterText(() => e.target.value);
                    }}
                    placeholder={'Текст сообщения'}
                />
            </div>

            <div className={'Filters__actions'}>
                <Button color={'primary'} onClick={handleApplyFilter}>
                    Применить
                </Button>
                <Button onClick={handleResetFilter}>Сбросить</Button>
            </div>
        </div>
    );
};

export default React.memo(Filters);
