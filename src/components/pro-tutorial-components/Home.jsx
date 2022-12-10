import { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false },
      ],
      newItemText: "",
    };
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(
        (item) => item.action === this.state.newItemText
      )
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false },
        ],
        newItemText: "",
      });
    }
  };

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Bob" : "Adam",
    });
  };

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  todoTableRows = () =>
    this.state.todoItems.map((item) => {
      return (
        <tr
          key={item.action}
          class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
        >
          <td class="py-4 px-6">{item.action}</td>
          <td class="py-4 px-6">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => this.toggleTodo(item)}
              className="accent-pink-500"
            />
          </td>
        </tr>
      );
    });

  render() {
    return (
      <div>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 cursor-pointer hover:scale-105 transition duration-100 ease-in-out">
          <h4 className="text-white text-3xl text-center p-5">
            {this.state.userName}'s To Do List (
            {this.state.todoItems.filter((item) => !item.done).length} items to
            do)
          </h4>
        </div>
        <div className="container mx-auto mt-10">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue}
              placeholder="todo"
            />
            <button
              onClick={this.createNewTodo}
              className="mt-5 px-4 py-2 font-semibold text-sm  text-indigo-500 rounded-md  shadow-sm hover:scale-105 hover:shadow-md ease-in-out duration-300"
            >
              Change
            </button>
          </form>

          <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Descriptioni
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Done
                  </th>
                </tr>
              </thead>
              <tbody>{this.todoTableRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
