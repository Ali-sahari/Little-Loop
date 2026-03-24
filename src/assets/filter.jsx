  
  const [filteR, setFilteR] = useState("Description")



 <div className="text-center">
  <button
    onClick={() => setFilteR("Description")}
    style={{ border: "none", background: "none", fontWeight: filteR === "Description" ? "bold" : "", color: filteR === "Description" ? "#FECF72" : "" }}
    className="ms-3">{Information[information].Description2}</button>


  <button
    onClick={() => setFilteR("Additionalinformation")}
    style={{ border: "none", background: "none", fontWeight: filteR === "Additionalinformation" ? "bold" : "", color: filteR === "Additionalinformation" ? "#FECF72" : "" }}
    className="ms-3">{Information[information].Additionalinformation2}</button>


  <button
    onClick={() => setFilteR("Reviews")}
    style={{ border: "none", background: "none", fontWeight: filteR === "Reviews" ? "bold" : "", color: filteR === "Reviews" ? "#FECF72" : "" }}
    className="ms-3">{Information[information].Reviews2}</button>
</div>


       <div className="col-md-12">
            {filteR === 'Description' && (
              <>

              </>
            )}
            {filteR === 'Additionalinformation' && (
              <>

              </>
            )}
            {filteR === 'Reviews' && (
              <>

              </>
            )}

          </div>