/* eslint-disable react/prop-types */
const Sidebar = ({ recipeQueue }) => {
  console.log(recipeQueue);
  return (
    <div className="w-1/3 border rounded-lg px-2 py-4">
      <h1 className="font-semibold text-2xl text-center">
        Want to Cook: {recipeQueue.length}
      </h1>
      <hr />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {recipeQueue.map((recipeQ, idx) => (
                <tr key={idx} className="hover">
                  <th>{idx + 1}</th>
                  <td>{recipeQ.recipe_name}</td>
                  <td>{recipeQ.preparing_time}</td>
                  <td>{recipeQ.calories}</td>
                  <td>
                    <button
                      className="font-medium text-base bg-[#0BE58A] py-2 px-4 rounded-full
                  my-3"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
