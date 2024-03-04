const convertString = (interval) => {
    switch (interval) {
        case 'today':
            return 'Today';
        case 'lastWeek':
            return 'Last Week';
        case 'lastMonth':
            return 'Last Month';
        default:
            return interval;
    }
};

export default convertString;
