const setOrder = (order) =>
{
    switch(order)
    {
        case "ascending":
            order=1;
            break;
        case "descending":
            order=-1;
            break;
    }
    return order;
}

module.exports = setOrder;