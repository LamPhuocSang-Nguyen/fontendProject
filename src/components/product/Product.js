import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, Col,CardTitle } from 'reactstrap'
import { AppConText } from '../../AppContext'
import Swal from 'sweetalert2'

export default function Product(props) {
    const { product } = props
    const {addCart} = useContext(AppConText);
    const handle_add = (id)=>{
        Swal.fire({
            title: "Add successfull",
            text: "Yeah",
            icon: "success"
          });

          addCart(id);
    }
    return (
        <Col lg={3} md={4} sm={6} xs={6} className='' >


            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        <h1>product</h1>
                        <p>Info: {product.name}</p>
                        <Link to={`/detail/${product.id}`}>Chi tiết sản phẩm</Link>
                    </CardText>
                    <Button onClick={()=>handle_add(product.id)} color="warning">
                        Add cart
                    </Button>
                </CardBody>
            </Card>
        </Col>
    )
}
