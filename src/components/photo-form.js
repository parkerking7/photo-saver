import React, {Component} from 'react';

class PhotoForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            imgUrl: ''
        }
    }
     newPhoto (newState) {
        this.props.addPhoto(newState);
        this.setState (
            {
                title: '',
                description: '',
                imgUrl: ''
            });
    };
render(){
        return(
            <form>
                <input value = {this.state.title} onChange ={event => this.onTitleChange(event.target.value)} type="text" placeholder="Title..."/>
                <input value = {this.state.description} onChange = {event => this.onDescriptionChange(event.target.value)} type="text" placeholder="Description..."/>
                <input value = {this.state.imgUrl} onChange = {event => this.onImageURLChange(event.target.value)}  type="text" placeholder="Image URL..."/>
                <button type='button' onClick = { () => this.newPhoto(this.state) } className="btn btn-default">Add Photo</button>
            </form>
        )

}

    onTitleChange(title){
        this.setState({ title });
        // this.props.onSearchTermChange(term);
    }
    onDescriptionChange(description){
        this.setState({ description });
        // this.props.onSearchTermChange(term);
    }
    onImageURLChange(imgUrl){
        this.setState({ imgUrl });
        // this.props.onSearchTermChange(term);
    }

}

export default PhotoForm;
//
// this.onInputChange(event.target.value)} />
// </div>
// );
// }


