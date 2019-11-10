async function postData(data){
    const url = "https://sample.mindx.edu.vn/c4e/api/posts"
    const reponse = await fetch(url,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    })
}
const data = {
    title: "Cảm nghĩ về lớp",
    author: "Thế Hoàng",
    content: "Lớp học bổ ích và rất thú vị"
}

postData(data);