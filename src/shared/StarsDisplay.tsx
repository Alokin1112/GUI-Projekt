

function StarsDisplay(props: { review: number }) {

  const numbers = [1, 2, 3, 4, 5]

  return (
    <div style={{ display: 'flex', 'flexDirection': 'row', gap: '4px', 'alignItems': 'center', justifyContent: 'center' }}>
      {
        numbers.map((item) =>
          <span key={item} className="material-icons">
            {item <= props?.review ? 'star' : 'star_border'}
          </span>)
      }

    </div>
  )

}

export default StarsDisplay;