    document.querySelectorAll('.form-main').forEach(form => {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        // Данные из формы
        const country = formData.get('country');
        const name = formData.get('name');
        const phone = formData.get('phone');

        // URL входящего вебхука Битрикс24
        const webhookUrl = "https://levandpartners.bitrix24.ru/rest/5340/vaejjk5n2iemsuy4/";

        const payload = {
            fields: {
                TITLE: "Заявка с сайта",
                NAME: name,
                PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
                COMMENTS: "Страна: " + country,
                SOURCE_ID: "WEB"
            }
        };

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.result) {
                // Успех → переход на send.html
                window.location.href = "send.html";
            } else {
                alert("Ошибка при отправке. Попробуйте позже.");
            }
        } catch (error) {
            alert("Ошибка соединения. Попробуйте позже.");
        }
    });
});
