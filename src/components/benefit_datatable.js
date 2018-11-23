import React, { Component } from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net-se')

export class BenefitDatatable extends Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    { title: "<h4>Code</h4>" },
                    { title: "<h4>Name</h4>" }
                ],
                dom:
                    "<'ui grid'"+
                    "<'row'"+
                    "<'two wide column'f>"+
                    "<'left aligned twelve wide column'i>"+
                    ">"+
                    "<'row'"+
                    "<'center aligned sixteen wide column'>"+
                    ">"+
                    "<'row dt-table'"+
                    "<'sixteen wide column'tr>"+
                    ">"+
                    "<'row'"+
                    "<'four wide column'l>"+
                    "<'right aligned twelve wide column'p>"+
                    "<'right aligned four wide column'>"+
                    ">"+
                ">",
                renderer: 'semanticUI',
                pagingType: "full_numbers",
                scrollX: true,
                language: {
                info: "_TOTAL_",
                infoEmpty: "",
                emptyTable:     "No Records Found!",
                zeroRecords:    "No Matching Records Found!",
                search:         "",
                paginate: {
                  first: "<i class='angle double left icon'></i> First",
                  previous: "<i class='angle single left icon'></i> Previous",
                  next: "Next <i class='angle single right icon'></i>",
                  last: "Last <i class='angle double right icon'></i>"
                }
              },
              "drawCallback": function () {
                add_search(this)
              }
            }
        )
    }
    render() {
        return <div style={{width: '100%'}}>
            <table className="ui very basic striped selectable table" style={{cellspacing: "0", width: "100%"}} ref={el => this.el = el}></table>
        </div>
    }
}

function add_search(table){
  let id = table[0].getAttribute("id")
  let value = $(`#${id}_filter`).val()
  let results = $(`#${id} >tbody >tr`).length
  let total = $(`#${id}_info`).html()

  if(results == 1){
    if($(`#${id} >tbody >tr >td.dataTables_empty`).length > 0){
      $(`#${id}_info`).html(`Showing 0 out of 0 ${total} results`)
    }
    else{
      $(`#${id}_info`).html(`Showing ${results} out of ${total} results`)
    }
  }
  else{
    $(`#${id}_info`).html(`Showing ${results} out of ${total} results`)
  }

  if(value != 1){
    $(`#${id}_filter`).addClass('ui left icon input')
    $(`#${id}_filter`).find('input[type="search"]').unwrap()
    $(`#${id}_filter`).find('input[type="search"]').attr("placeholder", `Search`)
    $(`#${id}_filter`).find('input[type="search"]').append(`</div>`)
    $(`#${id}_filter`).val(1)
  }
}

export default BenefitDatatable