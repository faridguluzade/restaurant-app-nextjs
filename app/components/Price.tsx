import { PRICE } from "@prisma/client";

function Price({ price }: { price: PRICE }) {
  let output;
  const renderPrice = () => {
    switch (price) {
      case "CHEAP":
        {
          output = (
            <>
              <span>$</span> <span className="text-gray-400">$$$</span>
            </>
          );
        }
        break;

      case "REGULAR":
        {
          output = (
            <>
              <span>$$</span> <span className="text-gray-400">$$</span>
            </>
          );
        }
        break;

      case "EXPENSIVE":
        {
          output = <span>$$$$</span>;
        }
        break;
      default: {
        output = output = <span>$$$$</span>;
      }
    }

    return output;
  };

  return <p className="flex  mr-3">{renderPrice()}</p>;
}

export default Price;
