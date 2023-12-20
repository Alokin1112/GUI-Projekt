import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items:center;
  justify-items:center;
`


function StarsDisplay(props: { review: number }) {

  const numbers = [1, 2, 3, 4, 5]

  return (
    <Wrapper>
      {
        numbers.map((item) =>
          <span key={item} className="material-icons">
            {item <= props?.review ? 'star' : 'star_border'}
          </span>)
      }
    </Wrapper>
  )

}

export default StarsDisplay;