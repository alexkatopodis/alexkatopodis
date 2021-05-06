import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';

import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string,
    description: string,
    amountFormatted: string,
    frequency: string,
    dateFormatted: string,
    tagColor: string,

}

const List: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([]);

    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saída'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#f7931b' : '#E44C4E'
    }, [type]);


    const listData = useMemo(() => {
        return type === 'entry-balance' ?  gains  : expenses;
    },[]);






    const months = [
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },

    ];

    const years = [
        { value: 2020, label: 2020 },
        { value: 2021, label: 2021 },
        { value: 2022, label: 2022 },

    ];

    useEffect(() => {

      const response = listData.map(item => {
        return {

        id: String(Math.random () * data.length),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate (item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#E44C4E'
     
        }
      });

      setData(response);

    }, []);



    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent"

                >
                    Recorrentes
                </button>


                <button
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>

            </Filters>

            <Content>
                {
                    data.map(item =>(
                <HistoryFinanceCard
                    key={item.id}
                    tagColor={item.tagColor}
                    title={item.description}
                    subtitle={item.dateFormatted}
                    amount={item.amountFormatted}
                />
                ))    
            }
            </Content>
        </Container>
    );
}

export default List;
