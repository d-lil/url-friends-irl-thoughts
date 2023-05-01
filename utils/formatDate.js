function formatDate(timestamp) {
    // Use the `Intl` object to format the date
    return Intl.DateTimeFormat('en-US').format(timestamp);
}

module.exports = formatDate;