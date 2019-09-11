import * as f from '@f'
import createComment from './createComment'
import createElement from './createElement'
import executeComponent from './executeComponent'
import isComponent from './isComponent'
import isTagName from './isTagName'

/**
 * Hyperscript, syntaxe javascript para construir elementos HTML
 *
 * @name h
 * @function
 * @access public
 * @param {string|function} tagNameOrComponent Nome do tag HTML ou referencia do componente
 * @param {object} attributes Atributos do elemento HTML ou componente
 * @param {array} children Elementos filhos
 * @returns {Node} Elemento HTML
 */
export default (tagNameOrComponent, attributes, ...children) =>
  f.cond(
    [isTagName, createElement],
    [isComponent, executeComponent],
    [f.T, createComment]
  )(tagNameOrComponent, { ...attributes }, f.flatten(children))
