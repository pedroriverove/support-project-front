import moment from 'moment';
import 'moment/min/locales';

const formatDate = (value: any, formatting: string) => {
    if (!value) return value;

    return moment(String(value)).locale('es').add(24, 'hours').format(formatting);
}

const Filter = {
    formatDate
};

export default Filter;
