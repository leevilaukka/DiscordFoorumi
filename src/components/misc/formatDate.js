export const formatDate = date => {
    const newDate = new Date(Date.parse(date));
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    const hour = newDate.getHours();
    const min = newDate.getMinutes();

    return (`${day}.${month}.${year} ${hour}:${min}`);
};