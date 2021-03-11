const app = require("./app");

const port = process.env.PORT || 5000
    /* Первый был Роут (Удалили)
app.get('/', (req, res) => { // '/' - это ключевой роут
    res.status(200).json({
        message: 'Working'
    })
})
*/

// app.listen(5000, function () {
// //     console.log('Server has been started')
// // })
app.listen(5000, () => console.log(`Server has been started on ${port}`)) // 5000 тут это порт; `` Для использования
// внутренней шаблонизации