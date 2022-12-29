import Axios from "axios"
import "../assets/styles/addressShipping.css"
import {useState,useEffect} from "react"
import {ArrowBack,LocalShipping} from "@mui/icons-material"
import {Link,useHistory,useLocation} from "react-router-dom"
import {Container} from "@mui/material"
import { useSelector,useDispatch } from "react-redux"

export default function ChooseShipping(){
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => ({
        user: state.auth.user,
    }));
    console.log("user", user)

    const [warehouseLoc,setWarehouseLoc]=useState("")
    const [ongkir,setOngkir]=useState()
    const [courier,setCourier]=useState("")
    const [costSelect,setCostSelect]=useState()
    const [orderState, setOrderState] = useState([])
    console.log("ongkir", ongkir)
    console.log("courier", courier)
    console.log("costSelect", costSelect)
    console.log("orderState", orderState)
    
    const whAddress = "114" //bali
    const homeLoc = location.state
    console.log(homeLoc)
    const fetchLocations=()=>{
        Axios.get(`http://localhost:3300/api/address/wh-loc/${whAddress}`)
        .then(res=>{
            setWarehouseLoc(res.data.area)
        })
    }

    const ongkirCount=()=>{
        let courierCode = ""
        if(courier.length>2){
            courierCode = courier.split(" ")
            courierCode = courierCode[0].toLowerCase()
        } else {
            courierCode = courier.toLowerCase()
        }
        
        const req = {
            origin: whAddress,
            destination: homeLoc,
            courier: courierCode,
        }
        Axios.post(`http://localhost:3300/api/address/ongkir-type`,req)
        .then(res=>{
            const rajaongkirData = JSON.parse(res.data)
            const rajaongkirCost = rajaongkirData.rajaongkir.results[0]
            setOngkir(rajaongkirCost)
        })
    }

  // mengambil data order
  const getOrder = () => {
    Axios.get(`http://localhost:3300/api/order/get-order/${user.customer_uid}`)
    .then((result) => {
      setOrderState(result.data);
      console.log("ini get order", result.data)
    })
    .catch(() => {
      alert('Terjadi kesalahan di server');
    });
  }

    useEffect(()=>{
        getOrder()
        fetchLocations()
    },[])

    const courierSelect=(
        <div className="ship-courier-selector">
            <select className="courier-option" onChange={e=>setCourier(e.target.value)}>
                <option>JNE</option>
                <option>POS Indonesia</option>
                <option>TIKI</option>
            </select>
            <button className="courier-acc" onClick={ongkirCount}>Select Courier</button>
        </div>
    )

    const deliveryCard=(x)=>{
        return (
            <div className="ship-choice">
                <div className="ship-method">
                    <LocalShipping style={{fill: "black"}}/>
                    <div className="ship-choice-text">
                        <div className="ship-choice-title">{x.description}</div>
                        <div className="ship-choice-spec">Estimated Arrival {x.cost[0].etd}</div>
                    </div>
                </div>
                <div className="ship-select-dot">
                    <div className="ship-fee">Rp.{x.cost[0].value}</div>
                    <div className="ship-selector"><input type="radio" value={x.cost[0].value} className="ship-radio" name="shipradio" onChange={e=>setCostSelect(parseInt(e.target.value))}/></div>
                </div>
            </div>
        )
    }

    const ongkirFinal=()=>{
        const data = {
            shipping_courier: courier,
            shipping_price: costSelect,
          }
          Axios.put(`http://localhost:3300/api/order/edit-shipping/${user.customer_uid}`, data)
          .then(() => {
            history.push(`/checkout/${user.customer_uid}/${orderState.id}`)
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
    }

    const detectCityId=()=>{
        if(!homeLoc){
            history.push('/')
        }
    }
    
    return(
        <div className="ship-wrapper">
            <Container className="ship-container" maxWidth="xs">
                {detectCityId()}
                <div className="ship-topside">
                    <div className="ship-arrowwrap">
                        <Link to ={`/address-list/${user?.customer_uid}`}>
                            <button className="ship-arrowback"><ArrowBack/></button>
                        </Link>
                    </div>
                    <div className="ship-title">Choose Shipping</div>
                </div>
                <div className="ship-subwrap">
                    <div className="ship-select">
                        {courierSelect}
                        {ongkir?.costs.map(aa=>deliveryCard(aa))}
                    </div>
                    <div className="ship-continue">
                        <button 
                            className="ship-button"
                            onClick={ongkirFinal}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
