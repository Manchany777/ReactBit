import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MemberDetail = ({ data }) => {
    const { memberId } = useParams()
    const [memberDTO, setMemberDTO] = useState([])
    const navigate = useNavigate()

    const { name, email, phone, website } = memberDTO 

    const css = {
        border: '1px solid cyan',
        margin: 20,
        padding: '20px'
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${memberId}`)
            .then(res => setMemberDTO(res.data))
    }, [])

    const onBack = () => {
        // navigate('/') // 홈으로 가라
        navigate(-1)     // 같은 역할
    }

    return (
        <div style={ css }>
            <h2>MemberDetail Page : { memberId }</h2>
            <h4>이름 : { name }</h4>
            <ul>
                <li>이메일 : { email }</li>
                <li>전화번호 : { phone }</li>
                <li>웹사이트 : { website }</li>
            </ul>
            <button onClick={ onBack }>뒤로</button>
        </div>
    );
};

export default MemberDetail;