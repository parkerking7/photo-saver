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
                <input className="formBox col-sm-4 col-xs-12" value = {this.state.title} onChange ={event => this.onTitleChange(event.target.value)} type="text" placeholder="Title..."/>
                <textarea className="descriptionBox formBox col-sm-4 col-xs-12" value = {this.state.description} onChange = {event => this.onDescriptionChange(event.target.value)} type="text" placeholder="Description..."/>
                <input className="formBox col-sm-4 col-xs-12" value = {this.state.imgUrl} onChange = {event => this.onImageURLChange(event.target.value)}  type="text" placeholder="Image URL..."/>
                <button type='button' onClick = { () => this.newPhoto(this.state) } className="btn btn-default submitBtn col-sm-offset-4 col-sm-4 col-xs-12">Add Photo</button>
            </form>
        )

}

    onTitleChange(title){
        this.setState({ title });
    }
    onDescriptionChange(description){
        this.setState({ description });
    }
    onImageURLChange(imgUrl){
        this.setState({ imgUrl });
    }

}

export default PhotoForm;


