/* eslint-disable react/prop-types */
const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="w-1/3 border rounded-lg px-2 py-4">
      <div>
        {/* Want to cook table */}
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl text-center mb-3">
            Want to Cook: {recipeQueue.length}
          </h1>
          <hr />
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
                      onClick={() => {
                        handleRemove(recipeQ.recipe_id);
                        calculateTimeAndCalories(
                          recipeQ.preparing_time,
                          recipeQ.calories
                        );
                      }}
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

        {/* Currently cooking table */}
        <div className="overflow-x-auto mt-8">
          <h1 className="font-semibold text-2xl text-center mb-3">
            Currently cooking: {preparedRecipe.length}
          </h1>
          <hr />
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {preparedRecipe.map((prepare, idx) => (
                <tr key={idx} className="hover">
                  <th>{idx + 1}</th>
                  <td>{prepare.recipe_name}</td>
                  <td>{prepare.preparing_time}</td>
                  <td>{prepare.calories}</td>
                </tr>
              ))}
              <tr className="border-none">
                <th></th>
                <td></td>
                <td className="font-medium text-base">Total Time = {totalTime}</td>
                <td className="font-medium text-base">Total Calories = {totalCalories}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
