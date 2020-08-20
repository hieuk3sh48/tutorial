import React, { useState, useEffect } from 'react';
import './Form.css';

/* 
    array: là mảng chữ mẫu để mình viết theo.
    arrayTyping: là mảng chúng ta gõ được
    currentWord: là vị trí chữ hiện tại chúng ta đang gõ, để khi chúng ta gõ đến đâu thì sẽ thêm css cho chữ mẫu vị trí đó để biết chúng ta gõ đến từ nào nhé.
    countWordCorrect: đếm số từ đúng
    countWordWrong: đếm số từ sai
    timeCount: để check thời gian khi chúng ta gõ ký tự đầu tiên bộ đếm thời gian sẽ chạy
*/

function Form() {
    const array = [
        "công", "nghệ", "tay", "đơn", "viết", "lách", "lịch", "sử", "cảm", "ngoài", "hà", "hoàn", "toàn", "khỏe", "mạnh",
        "cảm", "ơn", "dũng", "xã", "hội", "thanh", "bánh", "kính", "dạ", "vâng", "da", "thanh", "niên", "tỉnh", "tháng",
        "hãy", "kính", "hạnh", "phúc", "ngữ", "văn", "khoa", "sinh", "hà", "nội", "màu", "ngành", "khó", "khăn", "trường",
        "học", "quảng", "nam", "thành", "đỏ", "hãy", "sư", "phạm", "làm", "giao", "thông", "thang", "chú", "gì", "kĩ",
        "thuật", "xin", "lỗi", "gió", "tuổi", "tin", "ngoài", "tri", "tháng", "phủ", "hoàn", "toàn", "phải", "chính",
        "khóc", "ngày", "phố", "quảng", "nam", "tự", "do", "minh", "khỏe", "mạnh", "ba", "bà", "đợi", "chi", "dũng",
        "nhà", "sợ", "lao", "xao", "hay", "tin", "năm", "tri", "hạnh", "phúc", "đàn", "sáo", "phối", "hợp", "năm",
        "xây", "dựng", "im", "giấy", "tờ", "trời", "chia", "sẻ", "nga", "nhung", "cười", "chú", "trong", "thi",
        "hành", "cổ", "tích", "in", "tự", "do", "phương", "vì", "xin", "bao", "quát", "xin", "lỗi", "lại", "đi"
    ]
    const [arrayTyping, setArrayTyping] = useState([]);
    const [currentWord, setCurrentWord] = useState(0);
    const [time, setTime] = useState(60);
    const [countWordCorrect, setCountWordCorrect] = useState(0);
    const [countWordWrong, setCountWordWrong] = useState(0);
    const [isTimeCount, setIsTimeCount] = useState(false);

    let element = array.map((element, index) =>
        <span 
            key={index} 
            className={index === currentWord ? "highlight" : index < currentWord &&
                       arrayTyping.map((typing,indexTyping)=>

                           typing === array[indexTyping] ? ' correct' : ' wrong'
                       )
                
            }
        >
            {element + " "}
        </span>
    );

    useEffect(() => {
       if(isTimeCount){
            let count = 1;
            let timeWord = time;
            const timer = window.setInterval(()=>{
                count++;
                setTime(timeWord - count);
                if(count === 60){
                    clearInterval(timer);
                }   
            },100);
            return () => clearInterval(timer);
       }
       return undefined;
    }, [isTimeCount])

   
    useEffect(() => {
        
        //console.log(arrayTyping)
        let correct = 0;
        let wrong = 0;
        arrayTyping.map((item,index)=>{
            //console.log(item, array[index])
            if(item === array[index]){
                correct = correct + 1
            }
            if(item !== array[index] && item){
                wrong = wrong + 1
            }
        })

        setCountWordCorrect(correct);
        setCountWordWrong(wrong);
    }, [arrayTyping])


    const handleChange = (event) => {
        event.preventDefault();

        let txtText = event.target.value;
        let results = txtText.split(/\s+/).join(' ');

        setArrayTyping(results.split(" "))
        setCurrentWord(results.split(" ").length - 1)
        setIsTimeCount(txtText.length >= 1 && true);

       
    }

    const resetButton = (event) => {
        event.preventDefault();

        reset();
    }

    const reset = () => {
        setIsTimeCount(false);
        setArrayTyping([]);
        setCurrentWord(0);
        setTime(60);
        setCountWordCorrect(0);
        setCountWordWrong(0);
    }

    return (
        <div className="container">
            <div className="panel panel-primary panel-typing">
                <div className="panel-heading">
                    <h3>Website kiểm tra tốc độ gõ bàn phím</h3>
                </div>
                <div className="panel-body">
                    <div className="item-character">
                        {element}
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Input</label><br />
                            <input 
                                className="form-control"
                                placeholder="Please input typing"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-2">
                            <label>Time</label><br />
                            <button 
                                className="btn btn-primary btn-lange" 
                                onClick={resetButton}
                            >
                                <p id="show-time">
                                    {time}
                                </p>
                            </button>
                        </div>
                        <div className="col-md-2">
                            <label>Word correct</label>
                            <p>{countWordCorrect}</p>
                        </div>
                        <div className="col-md-2">
                            <label>Word wrong</label>
                            <p>{countWordWrong}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
