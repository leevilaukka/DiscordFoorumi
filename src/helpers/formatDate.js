export const formatDate = date => {
    //const months = ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"];
    const newDate = new Date(Date.parse(date));
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    let hour = newDate.getHours();
    let min = newDate.getMinutes();

    if(hour < 10){
        hour = "0" + hour
    }

    if(min < 10){
        min = "0" + min
    }
    return (`${day}.${month + 1}.${year} ${hour}:${min}`);
};