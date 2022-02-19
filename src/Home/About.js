export const About = () => {
  return (
    <>
      <div>
        <img style={{ position: 'absolute' }} src={process.env.PUBLIC_URL + '/banner2.webp'}></img>
        <div style={{ position: 'relative', top: 150, width: '80%', margin: 'auto', textAlign: 'center', color: 'white'}}>
          <p style={{fontSize: '60px'}}>
            Why Choose Busy Bee
          </p>
          <p style={{fontSize: '36px'}}>
            Busy Bee is located in Edmonton, focuses on ocean freight between China and Canada. We strives to provide logistics solutions to its customers. With good price, high efficiency, and professional logistic services, we help customers ship their newly purchased goods from Canada to cities across China. Small businesses are also important members of our logistic services. We provide small businesses with a one-stop shipping service between Canada and China.
          </p>
        </div>

      </div>


    </>
  )
}