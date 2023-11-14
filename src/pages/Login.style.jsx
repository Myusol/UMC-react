import styled from "styled-components";

export const LoginpageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 700px;
    margin: 30px auto;
    gap: 10px;

    h2{
        text-align: left;
        align-items: left;
        font-size: 30px;
        font-weight: bold;
        margin-left: 0;
    }
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 1);
    gap: 5px;
    margin-bottom: 5px;

    label{
        font-size: 17px;
    }

    input{
        width: 700px;
        font-size: 15px;
        border-radius: 8px;
        padding: 17px 20px; /* 입력된 텍스트의 시작 위치 조정 */
        border: 2px solid #EBEBEB; /* 포커스 해제 시 회색 테두리 */
        outline: none; /* 기본 포커스 효과 제거 */
    }

    input:focus {
        border: 2px solid #000000; /* 포커스 시 검은색 테두리 */
    }

    span{
        color: rgba(255, 0, 0, 1);
    }
`;

export const ConfirmBtn = styled.button`
    width: 740px;
    height: 45px;
    background-color:  ${props => (props.disabled ? '#DADADA' : '#032641')};
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
