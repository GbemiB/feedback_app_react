import Card from "./shared/Card";

function GetyItem() {   
      const title = 'My name is Gbemisola, I am the founder and CEO of Gety Store';
      const value = 'I am pleased to welcome you';
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
              <div>{title.toUpperCase()}</div>
              <div>{value}</div>
              {5 + 5}
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
  