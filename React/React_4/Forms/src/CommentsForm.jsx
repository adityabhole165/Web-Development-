import { useState } from "react";

export default function CommentsForm() {
        let [formData,setFormData] = useState({
            username: "",
            remark:"",
            rating: 5
        });
        
        let handleInputChange = (event) => {
            setFormData(
                (currData) =>{
                    return{
                        ...currData,[event.target.name]:event.target.value
                    }
                }
            );
        }

        let handleSubmit = (event)=> {
            console.log(formData);
            event.preventDefault();
            setFormData({
                username: "",
                remark:"",
                rating: 5
            });
        }
     
        return (
            <div>
                <h4>Give a Comment!</h4>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">User Name</label>
                    <br />
                    <input type="text" placeholder="userName" name="username" value={formData.username}
                    onChange={handleInputChange}
                    id="userName"
                    />
                    <br /><br />

                    <label htmlFor="remark">Remarks</label>
                    <br />
                    <textarea name="remark" placeholder="add few Remarks "
                    value={formData.remark}
                    onChange={handleInputChange}
                    id="remark"
                    >  </textarea>
                    <br /><br />

                    
                    <label htmlFor="rating">Rating  </label>
                    <br />
                    <input type="number" placeholder="rating" min={1} max={5} value={formData.rating}
                        onChange={handleInputChange}
                        id="rating"
                        name="rating"
                    />
                                        <br /><br />

                <button>Add Comment</button>
                </form>
            </div>
        );
    }
