import React, { Component } from 'react'
import Footer from '../Footer'

export default class BCS extends Component {
    render() {
        return (
            <div className="row my-5">
                <div className="col-md-8">
                    <h1 className="text-white bg-danger p-3 mb-5">About BCS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet luctus risus, id malesuada velit. In egestas, elit id sagittis maximus, odio neque volutpat nunc, quis blandit mi dui non turpis. Aenean dictum lectus tortor, sit amet porta ligula maximus nec. Pellentesque arcu turpis, accumsan mollis pulvinar non, sollicitudin eu augue. Nulla eget lacinia urna, vitae porta ligula. Sed at turpis ut mauris ultrices dictum non nec justo. Cras sed mi est. Aliquam faucibus sit amet elit eu ullamcorper. Sed nec ipsum consequat, sollicitudin justo at, faucibus justo. Pellentesque blandit felis quis blandit rhoncus. Vivamus nibh purus, ullamcorper eget orci sit amet, consequat cursus ipsum. Nunc tincidunt diam vel lacus scelerisque ornare. Sed cursus, sem eu eleifend lobortis, ex elit pulvinar nisl, in maximus turpis mauris sit amet lorem. Vestibulum ipsum erat, sollicitudin id ultrices at, fringilla non magna. Suspendisse dictum sapien vitae sem tincidunt, sit amet fermentum mi egestas. Morbi nec massa eleifend risus ullamcorper dignissim ac ut nibh.

                    Duis orci risus, mattis eu justo ut, dignissim condimentum sapien. Proin sit amet justo justo. Nulla neque nibh, auctor nec viverra ut, auctor a orci. Praesent luctus, orci vitae interdum tempor, leo elit ornare ipsum, in cursus orci neque nec mauris. Nunc id leo sagittis magna luctus volutpat. Pellentesque odio nunc, molestie quis ullamcorper quis, pretium eget tortor. Maecenas efficitur nunc non purus euismod consequat.

                    Sed vehicula urna a diam fringilla, nec consequat velit feugiat. Sed ultricies elit quam, sit amet facilisis nunc tincidunt a. Suspendisse sagittis dapibus lorem, ut malesuada ligula vestibulum posuere. Aliquam vitae risus a mi semper bibendum. Cras et urna faucibus, laoreet nibh sed, imperdiet risus. Integer mattis massa quis ex tincidunt pharetra. Vestibulum nunc nunc, finibus at risus eget, interdum porta nisl.

                    Suspendisse ac mauris in mi facilisis commodo quis vitae augue. Donec nec neque ante. Sed posuere volutpat tortor, quis sollicitudin sapien. Pellentesque id lobortis felis. Donec eleifend semper est, nec consequat felis lacinia in. Proin tempus dui a iaculis rhoncus. Etiam lacinia placerat sem in porta. Vestibulum faucibus quam fringilla velit mattis aliquam. Donec sodales magna non massa convallis, eget auctor diam bibendum.

                    Integer vel aliquam enim, eget dignissim justo. Vestibulum eros neque, laoreet egestas laoreet ac, condimentum quis tortor. Sed venenatis lorem ante, vitae ornare massa tempus in. Suspendisse ut augue id nisl venenatis aliquet. Mauris odio neque, convallis ac placerat at, vestibulum at metus. Curabitur malesuada porttitor tincidunt. Donec auctor hendrerit dui. Proin commodo felis eu lorem porta suscipit. Nulla sed velit vitae mi sagittis tincidunt eget quis ante. Aliquam fringilla massa a nisi tristique, rutrum cursus sem feugiat.</p>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{width: "350px"}}>
                        <img className="card-img-top" src="BCS.jpg" alt="bcs" />
                        <div className="card-body">
                            <h4 className="card-title">BCS Course</h4>
                            <p> Enroll to get the latest features</p>
                            <a href="#" className="btn btn-primary">Enroll Now</a>
                        </div>
                    </div>
                </div>

                <Footer fixed="fixed-bottom" />


            </div>
        )
    }
}
