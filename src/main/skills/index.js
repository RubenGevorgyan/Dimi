import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import './index.css'


class Skills extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {tags: []}
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
        this.props.handleChange(this.state.tags)
    }
 
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }

    render(){
        if(this.props.currentStep !== 5 )
            return null

            return  <ReactTags tags={this.state.tags}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag} 
            />
}
}
export default Skills;