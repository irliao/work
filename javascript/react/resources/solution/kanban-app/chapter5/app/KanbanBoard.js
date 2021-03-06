import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Link } from 'react-router';
import List from './List';

class KanbanBoard extends Component {
  render(){
    let cardModal=this.props.children && React.cloneElement(this.props.children, {
      cards: this.props.cards,
      cardCallbacks: this.props.cardCallbacks
    });

    return (
      <div className="app">
        <Link to='/new' className="float-button">+</Link>
        
        <List id='todo'
              title="To Do"
              cards={this.props.cards.filter((card) => card.status === "todo")}
              cardCallbacks={this.props.cardCallbacks}
              taskCallbacks={this.props.taskCallbacks} />
        <List id='in-progress'
              title="In Progress"
              cards={this.props.cards.filter((card) => card.status === "in-progress")}
              cardCallbacks={this.props.cardCallbacks}
              taskCallbacks={this.props.taskCallbacks} />
        <List id='done'
              title='Done'
              cards={this.props.cards.filter((card) => card.status === "done")}
              cardCallbacks={this.props.cardCallbacks}
              taskCallbacks={this.props.taskCallbacks} />

        {cardModal}
      </div>
    );
  }
};
KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  cardCallbacks: PropTypes.object,
  taskCallbacks: PropTypes.object
};

export default DragDropContext(HTML5Backend)(KanbanBoard);
