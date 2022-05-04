import Card from "./shared/Card";

function GetyItem() {   
      const title = 'Jumia is a Pan-African technology company that is built around a marketplace, \
      logistics service and payment service. The logistics service enables the delivery of packages \
      through a network of local partners while the payment services facilitate the payments of online \
      transactions within Jumia’s ecosystem. It has partnered with more than 110,000 active sellers and \
      individuals and is a direct competitor to Konga in Nigeria.';
      const showStock = true;  // change to false and see the reaction
      const stock = [
          { id: 1, text: 'Skin care' },
          { id: 2, text: 'Make up' },
          { id: 3, text: 'Clothings' },
          { id: 4, text: 'Shoes/Footwears' },
          { id: 5, text: 'Hair dos' },
      ]
      return (
        <Card>
          <div>
              {/* <div>{title.toUpperCase()}</div> */}
              <div>{title}</div>
              {showStock ? (<div>
                  <h3>Our Female Product Highlight({stock.length})</h3>
                  <ul>
                      {
                          //Each list element should have a unique id either using index or comment id
                          stock.map((stock, index) => (
                              <li key={stock.id}>{stock.text}</li>
                          ))}
                  </ul>
              </div>) : ('No')}
              {showStock && (<div>
                  <h3>Our Female Product Highlight({stock.length})</h3>
                  <ul>
                      {
                          //Each list element should have a unique id either using index or comment id
                          stock.map((stock, index) => (
                              <li key={stock.id}>{stock.text}</li>
                          ))}
                  </ul>
              </div>)}
          </div>
          </Card>
          
      )
  }
export default GetyItem
  